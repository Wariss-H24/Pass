<?php
namespace App\Actions\Auth;
use App\Models\User
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
class LoginAction
{
     public function execute(array $data) : array{
        $user = User::where('email', $data['email'])->first();

        if(!$user || !Hash::check($data['password'], $user->password)){
            throw ValidationException::withMessages([
                'email' => ['Email ou mot de passe incorrect'],
            ])
        }

        //Suprimer anciens tokens(opt mais propre)
        $user->token()->delete()

        $token = $user->createToken('user_token')->plainTextToken;

        return [
            'user'=> $user,
            'token'=> $token,
        ]
     }
}
