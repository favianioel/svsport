<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
|----------------------------------------------
|    RESTFUL ROUTING CONVENTION
|----------------------------------------------
|    METHOD      PATH                ACTION
|
|    GET         /users              index
|    GET         /users/create       create
|    GET         /users/1            show
|    POST        /users              store
|    GET         /users/1/edit       edit
|    PATCH       /users/1            update
|    DELETE      /users/1            destroy
|
*/

Auth::routes();

Route::get('/', function () {
    return view('welcome');
});

Route::get('/profile', 'ProfileController@index');

Route::get('/dashboard', 'DashboardController@index')
    ->middleware('check_user_role:' . \App\Role\UserRole::ROLE_SUPERADMIN);

Route::get('/teams', 'TeamController@index');
Route::get('/teams/create', 'TeamController@create')->middleware('check_user_role:' . \App\Role\UserRole::ROLE_ADMIN);
Route::get('/teams/{id}', 'TeamController@show');
Route::post('/teams', 'TeamController@store')->middleware('check_user_role:' . \App\Role\UserRole::ROLE_ADMIN);
Route::get('/teams/{id}/edit', 'TeamController@edit')->middleware('check_user_role:' . \App\Role\UserRole::ROLE_ADMIN);
Route::patch('/teams/{id}', 'TeamController@update')->middleware('check_user_role:' . \App\Role\UserRole::ROLE_ADMIN);
Route::delete('/teams/{id}', 'TeamController@destroy')->middleware('check_user_role:' . \App\Role\UserRole::ROLE_ADMIN);

Route::get('/competitions', 'CompetitionController@index');
Route::get('/competitions/create', 'CompetitionController@create')->middleware('check_user_role:' . \App\Role\UserRole::ROLE_ADMIN);
Route::get('/competitions/{id}', 'CompetitionController@show');
Route::post('/competitions', 'CompetitionController@store')->middleware('check_user_role:' . \App\Role\UserRole::ROLE_ADMIN);
Route::get('/competitions/{id}/edit', 'CompetitionController@edit')->middleware('check_user_role:' . \App\Role\UserRole::ROLE_ADMIN);
Route::patch('/competitions/{id}', 'CompetitionController@update')->middleware('check_user_role:' . \App\Role\UserRole::ROLE_ADMIN);
Route::delete('/competitions/{id}', 'CompetitionController@destroy')->middleware('check_user_role:' . \App\Role\UserRole::ROLE_ADMIN);

