<?php

namespace App\Http\Controllers;

use App\Models\Score;
use Illuminate\Http\Request;

class ScoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Dapatkan semua data score urut berdasarkan nilai scorenyanya secara descending
        $score = Score::orderBy('score', 'DESC')->get();
        return response()->json([
            'data' => $score
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
        // Menyimpan instance score menggunakan data dari request API
        $score = Score::create([
            'nama' => $request->nama,
            'score' => $request->score,
            'language' => $request->language
        ]);

        return response()->json([
            'message' => 'Data Stored',
            'data' => $score
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Score $score)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Score $score)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Score $score)
    {
        $score->id = $request->id;
        $score->nama = $request->nam;
        $score->score = $request->score;
        $score->language = $request->language;

        $score->save();

        return response()->json([
            'message' => 'Data Updated Successfully',
            'data' => $score
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Score $score)
    {
        $score->delete();
        return response()->json([
            'message' => 'Quiz Deleted'
        ]);
    }
}
