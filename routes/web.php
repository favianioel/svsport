<?php

use \App\Role\UserRole;

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
Route::get('/landing_page', 'LandingController@index');
Route::get('/profile', 'ProfileController@index');
Route::get('/dashboard', 'DashboardController@index')

->middleware('check_user_role:' . UserRole::ROLE_SUPERADMIN);

Route::resource('teams', 'TeamController')
->middleware('check_user_role:'. UserRole::ROLE_ADMIN);

Route::resource('competitions', 'CompetitionController')
->middleware('check_user_role:' . UserRole::ROLE_ADMIN);

Route::resource('users', 'UserController')
->middleware('check_user_role:'. UserRole::ROLE_SUPERADMIN);
