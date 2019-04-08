<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LandingController extends Controller
{
    /**
     * controllers that redirects users
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();
        if ($user->hasRole("ROLE_SUPERADMIN")) {
            return redirect('/dashboard');
        }
        
        return redirect('/profile');
    }
}
