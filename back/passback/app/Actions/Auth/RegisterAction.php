<?php

namespace App\Actions\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
//Logique metier
class RegisterAction
{
   public function execute(array $data): User
   {
    return User::create([
        'name'=> $data['name'],
        'email'=>$data['email'],
        'password'=>Hash::make($data['password']),
    ])
   }
    
}
