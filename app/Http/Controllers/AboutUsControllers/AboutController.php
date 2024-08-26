<?php

namespace App\Http\Controllers\AboutUsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{

    public function index()
    {
        $user = auth('web')->user();
        return Inertia::render('Abouts/AboutView', [
            'user' => $user
        ]);
    }

    
}
