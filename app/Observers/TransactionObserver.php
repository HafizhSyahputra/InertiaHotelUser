<?php

namespace App\Observers;

use App\Models\Transactions;

class TransactionObserver
{
    public function saved(Transactions $transaction)
    {
        $this->updateDetailRoomStatus($transaction);
    }

    public function deleted(Transactions $transaction)
    {
        $this->updateDetailRoomStatus($transaction);
    }

    protected function updateDetailRoomStatus(Transactions $transaction)
    {
        if ($transaction->detailRoom) {
            $transaction->detailRoom->updateStatusBasedOnTransactions();
        }
    }
}
