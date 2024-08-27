<?php

use App\Http\Controllers\AboutUsControllers\AboutController;
use App\Http\Controllers\PaymentControllers\PaymentController;
 use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomControllers\RoomController;
use App\Http\Controllers\Transactions\TransactionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Room Routes
Route::get('/Room', [RoomController::class, 'index'])->name('roomIndex');
Route::get('/detail/room/{room_id}', [RoomController::class, 'LoadDetail'])->name('roomDetail');

// About Us
Route::get('/About-Us', [AboutController::class, 'index'])->name('aboutIndex');

// Payment Routes
Route::get('/payment-detail', [PaymentController::class, 'index'])->name('payment-detail');
Route::post('/api/save-booking-data', [PaymentController::class, 'saveBookingData']);
Route::post('/save-transaction', [PaymentController::class, 'storeTransaction']);
 // Transaction Routes
 Route::get('/transactions', [TransactionController::class, 'index'])->name('transaction.index');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
