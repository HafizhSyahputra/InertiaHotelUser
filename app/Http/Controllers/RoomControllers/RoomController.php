<?php

namespace App\Http\Controllers\RoomControllers;

use App\Http\Controllers\Controller;
 use App\Models\DetailRoom;
use App\Models\Room;
 use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class RoomController extends Controller
{

    public function index(Request $request)
    {

        $this->updateDetailRoomStatuses();

        $rooms = Room::with('detailRoom')->get();


        $user = auth('web')->user();



        return Inertia::render('Rooms/RoomView', [
            'rooms' => $rooms,
            'user' => $user
        ]);
    }

    protected function updateDetailRoomStatuses()
    {
         $detailRooms = DetailRoom::all();

        foreach ($detailRooms as $detailRoom) {
            $detailRoom->updateStatusBasedOnTransactions();
        }
    }

    public function LoadDetail($room_id)
    {
        $room = Room::with('detailRoom')->find($room_id);
        $user = auth('web')->user();
        return Inertia::render('Rooms/DetailRoom', ['rooms' => [$room], 'user' => $user]);
        
    }
}
