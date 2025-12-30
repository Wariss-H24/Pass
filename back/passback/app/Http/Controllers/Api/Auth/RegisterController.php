<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Actions\Auth\RegisterAction;
use App\Http\Resources\UserResource;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(RegisterRequest $request, RegisterAction $registerAction)
    {
        //Crée l'utilisateur
        $registerAction->execute($request->validated());

        return response()->json([
            'message'=>'Compte créé avec succès. Veuillez vous connecter'
        ], 201);
    }
}
