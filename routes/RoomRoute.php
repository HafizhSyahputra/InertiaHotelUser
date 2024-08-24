<?php

use App\Http\Controllers\RoomControllers\RoomController;
use Illuminate\Support\Facades\Route;


Route::get('/room', [RoomController::class, 'index'])
    ->middleware('auth')
    ->name('roomIndex');
Route::post('edit/room', [RoomController::class, 'EditRoom'])->name('room.update');
Route::get('/room/toCreate', [RoomController::class, 'LoadCreateForm'])->name('room.toCreate');
Route::post('room/create', [RoomController::class, 'CreateRoom'])->name('room.create');
Route::get('/edit/room/{room_id}', [RoomController::class, 'LoadEditForm'])->name('room.edit');
Route::get('/delete/room/{room_id}', [RoomController::class, 'DeleteRoom'])->name('room.delete');
