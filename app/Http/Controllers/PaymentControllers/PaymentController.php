<?php

namespace App\Http\Controllers\PaymentControllers;

use App\Http\Controllers\Controller;
use App\Models\Room;
use App\Models\Transactions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        $rooms = Room::with('detailRoom')->get();
        $user = auth('web')->user();
        $bookingData = $request->cookie('bookingData');
        $parsedBookingData = json_decode($bookingData, true);

        return Inertia::render('Payments/PaymentView', [
            'bookingData' => $parsedBookingData,
            'rooms' => $rooms,
            'user' => $user,
        ]);
    }

    public function storeTransaction(Request $request)
    {
        Log::info('Received Data:', $request->all());

        $validated = $request->validate([
            'order_id' => 'required|string',
            'check_in_date' => 'required|date',
            'check_out_date' => 'required|date',
            'user_id' => 'required|integer',
            'room_id' => 'required|integer',
            'detail_room_id' => 'required|integer',
            'total_people' => 'required|integer',
            'total_nights' => 'required|integer',
            'tax' => 'required|numeric',
            'total_price' => 'required|numeric',
            'status' => 'required|string',
            'payment_type' => 'required|string',
        ]);

        Transactions::create($validated);

        // Flash success message to session
        Session::flash('success', 'Pembayaran berhasil dilakukan!');
       
        // Redirect to the transactions page
        return redirect()->route('transaction.index');
    }

    public function saveBookingData(Request $request)
    {
        $data = $request->all();
        $minutes = 60;
        $cookie = cookie('bookingData', json_encode($data), $minutes, '/', null, true, true, false, 'Strict');
        return redirect()->route('payment-detail')->cookie($cookie);
    }
}
