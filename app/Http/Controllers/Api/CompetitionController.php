<?php

namespace App\Http\Controllers\Api;

use App\Competition;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CompetitionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $competitions = Competition::all();
        return $competitions->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = request('name');
        $competition = new Competition;
        $competition->name = $name;
        $competition->save();

        return response(['message' => 'Competition created']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Competition  $competition
     * @return \Illuminate\Http\Response
     */
    public function show(Competition $competition)
    {
        $competition = Competition::find($competition);
        return $competition->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Competition  $competition
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Competition $competition)
    {
        $name = $request('name');
        $entity = Competition::find($competition);
        $entity->name = $name;
        $entity->save();

        return response(['message' => 'Competition updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Competition  $competition
     * @return \Illuminate\Http\Response
     */
    public function destroy($competition)
    {

        $entity = Competition::find($competition);
        $entity->delete();
       
        return response(['message' => 'Competition deleted']);
    }
}
