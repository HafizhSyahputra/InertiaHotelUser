<?php
use App\Http\Controllers\RoomControllers\DetailRoomController;
use Illuminate\Support\Facades\Route;

Route::get('/detailRoom', [DetailRoomController::class, 'LoadDetailRooms'])
    ->middleware('auth')
    ->name('detail.index');
Route::post('edit/detailRoom', [DetailRoomController::class, 'EditDetailRoom'])->name('dRoom.update');
Route::get('/detailRoom/toCreate', [DetailRoomController::class, 'LoadCreateDetailForm'])->name('dRoom.toCreate');
Route::post('detailRoom/create', [DetailRoomController::class, 'CreateDetailRoom'])->name('dRoom.create');
Route::get('/edit/detailRoom/{detail_id}', [DetailRoomController::class, 'LoadEditDetail'])->name('dRoom.edit');
Route::get('/delete/detailRoom/{detail_id}', [DetailRoomController::class, 'DeleteDetail'])->name('dRoom.delete');

?>