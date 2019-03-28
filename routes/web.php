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

Route::get('/', function () {
    return view('welcome');
})->name('index');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
