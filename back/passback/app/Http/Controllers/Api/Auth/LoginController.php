<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Actions\Auth\LoginAction;
use App\Http\Resources\UserResource;

class LoginController extends Controller
{
    public function __invoke(
        LoginRequest $request,
        LoginAction $action
    ) {
        $result = $action->execute($request->validated());

        return response()->json([
            'message' => 'Connexion réussie',
            'user' => new UserResource($result['user']),
            'token' => $result['token'],
            'token_type' => 'Bearer',
        ]);
    }
}
