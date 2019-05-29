<?php

namespace App\Http\Controllers\Api;

use App\Team;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teams = Team::all();
        return response($teams);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $teamName = request('name');
        $team = new Team;
        $team->name = $teamName;
        $team->save();
        return response(['message'=>'Team created']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function show($team)
    {
        $team = Team::find($team);
        return response($team);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $team)
    {
        $name = request('name');
        $entity = Team::find($team);
        $entity->name = $name;
        $entity->save();
        return response(['message'=>'Team updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function destroy($team)
    {
        $entity = Team::find($team);
        $entity->delete();
        return response(['message'=>'Team deleted']);
    }
}
