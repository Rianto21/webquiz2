<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $quiz = Quiz::inRandomOrder()->limit(30)->get();
        return response()->json([
            'data' => $quiz
        ]) ;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // 
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $quiz = Quiz::create([
            'question' => $request->question,
            'a_answer' => $request->a['answer'],
            'a_correct' => $request->a['correct'],
            'b_answer' => $request->b['answer'],
            'b_correct' => $request->b['correct']
        ]);

        return response()->json([
            'message' => 'Data Successfully Stored',
            'data' => $quiz
        ]);
        
    }

    public function store_many(Request $request){
        $data = $request->all();
        $final_array = array();


        foreach ($data as $key => $value) {
            array_push($final_array, array(
                'question' => $value['question'],
                'a_answer' => $value['a']['answer'],
                'a_correct' => $value['a']['correct'],
                'b_answer' => $value['b']['answer'],
                'b_correct' => $value['b']['correct'],
            ));
            # code...
        }
        $quizzes = Quiz::insert($final_array);

        return response()->json([
            'message' => 'all data is inserted',
            'data' => $quizzes,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Quiz $quiz)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Quiz $quiz)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Quiz $quiz)
    {
        $quiz->id = $request->id;
        $quiz->question = $request->question;
        $quiz->a_answer = $request->a_answer;
        $quiz->a_correct = $request->a_correct;
        $quiz->b_answer = $request->b_answer;
        $quiz->b_correct = $request->b_correct;
        $quiz->save();

        return response()->json([
            'message' => 'Data Updated Successfully',
            'data' => $quiz
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Quiz $quiz, Request $request)
    {
        $quiz->where('id', $request['id'])->delete();
        return response()->json([
            'message' => 'Quiz Deleted'
        ]);
    }
}
