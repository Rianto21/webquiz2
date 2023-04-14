<?php

namespace App\Http\Controllers;

use App\Models\QuizIndonesia;
use Illuminate\Http\Request;

class QuizIndonesiaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $quiz = QuizIndonesia::inRandomOrder()->limit(30)->get();

        return response()->json([
            'data' => $quiz
        ]);
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
        $quiz = QuizIndonesia::create([
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
        }
        $quizzes = QuizIndonesia::insert($final_array);

        return response()->json([
            'message' => 'all data is inserted',
            'data' => $quizzes,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(QuizIndonesia $quizIndonesia)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(QuizIndonesia $quizIndonesia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, QuizIndonesia $quizIndonesia)
    {
        $quizIndonesia->id = $request->id;
        $quizIndonesia->question = $request->question;
        $quizIndonesia->a_answer = $request->a_answer;
        $quizIndonesia->a_correct = $request->a_correct;
        $quizIndonesia->b_answer = $request->b_answer;
        $quizIndonesia->b_correct = $request->b_correct;
        $quizIndonesia->save();

        return response()->json([
            'message' => 'Data Updated Successfully',
            'data' => $quizIndonesia
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(QuizIndonesia $quizIndonesia, Request $request)
    {
        $quizIndonesia->where('id', $request['id'])->delete();
        return response()->json([
            'message' => 'Quiz Deleted'
        ]);
    }
}
