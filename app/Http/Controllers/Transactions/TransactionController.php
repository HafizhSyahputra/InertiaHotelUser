<?php

namespace App\Http\Controllers\Transactions;

use App\Http\Controllers\Controller;
use App\Models\Room;
use App\Models\Transactions;
use Carbon\Carbon; // Tambahkan ini untuk menggunakan Carbon
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        $user = auth('web')->user();
        $transactions = Transactions::with('user', 'room', 'detailRoom')
            ->where('user_id', $user->id) // Filter transaksi berdasarkan user_id
            ->get();
    
        // Update status if the transaction is expired
        $transactions->transform(function ($transaction) {
            $checkoutDate = Carbon::parse($transaction->check_out_date);
            if ($checkoutDate->isPast() && $transaction->status !== 'expired') {
                $transaction->status = 'expired';
                $transaction->save(); // Save the updated status to the database
            }
            return $transaction;
        });
    
        return Inertia::render('Transactions/TransactionView', [
            'transactions' => $transactions,
            'user' => $user,
        ]);
    }
    
}
