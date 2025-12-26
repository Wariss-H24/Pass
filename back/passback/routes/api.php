<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Contollers\Api\LoginController;
use App\Http\Controller\Api\RegisterController;
use App\Http\Contollers\Api\LogoutController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [RegisterController::class]);
Route::post('/login', [LoginController::class]);

// Route::middleware('auth:sanctum')->post('/logout', LogoutController::class);


