<?php

namespace App\Http\Controllers\PaymentControllers;

use App\Http\Controllers\Controller;
use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index()
    {
        $rooms = Room::with('detailRoom')->get();
        $user = auth('web')->user();

        return Inertia::render('Payments/PaymentView', [
            'rooms' => $rooms,
            'user' => $user
        ]);
    }
}
