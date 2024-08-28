<?php

namespace App\Providers;

use App\Models\Transactions;
use App\Observers\TransactionObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    public function register(): void
    {
        //
    }
    public function boot(): void
    {
        Transactions::observe(TransactionObserver::class);
    }
}
