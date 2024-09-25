<?php

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});

# チャット送信
Route::post('/send', function (Request $request) {
    Broadcast::on('chat')->with([ "message" => $request->message])->as("NewMessage")->sendNow();
});