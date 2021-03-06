<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Signs in a new User
     *
     * @param Request $request
     * @return Json
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
           'name'     => 'required|string|max:255',
           'email'    => 'required|string|email|max:255|unique:users',
           'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response([
                'success' => false,
                'message' => join(" ", $validator->errors()->all())
            ], 422);
        }

        $request['password'] = Hash::make($request['password']);
        $user = User::create($request->toArray());

        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = [
            'success' => true,
            'token' => $token
        ];

        return response($response, 200);
    }

    /**
     * Signs in the user found in db
     *
     * @param Request $request
     * @return Json
     */
    public function login(Request $request)
    {

        $user = User::where('email', $request->email)->first();
    
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = [
                    'success' => true,
                    'token' => $token
                ];
                return response($response, 200);
            } else {
                $response = [
                    'success' => false,
                    'message' => "Passwords did not match."
                ];
                return response($response, 422);
            }
        } else {
            $response = [
                'success' => false,
                'message' => 'User not found.'
            ];
            return response($response, 422);
        }
    }

    /**
     * Signs out the user with the given token
     *
     * @param Request $request
     * @return Json
     */
    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        $response = [
            'success' => true,
            'message' => 'User has been logged out.'
        ];
        
        return response($response, 200);
    }

    /**
     * returns current logged user session
     *
     * @param Request $request
     * @return Json User
     */
    public function session(Request $request)
    {
        return response($request->user(), 200);
    }
}
