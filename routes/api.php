<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
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

Route::group(['middleware' => ['json.response']], function () {

    // public routes
    Route::post('/login', 'Api\AuthController@login')->name('login.api');
    Route::post('/register', 'Api\AuthController@register')->name('register.api');

    // private routes
    Route::middleware('auth:api')->group(function () {
        Route::get('/logout', 'Api\AuthController@logout')->name('logout');
        Route::get('/user-session', 'Api\AuthController@session')->name('user-session');
        Route::resource('users', 'Api\UserController');
        Route::resource('competitions', 'Api\CompetitionController');
        Route::resource('teams', 'Api\TeamController');
    });
});
