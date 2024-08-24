<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoomController extends Controller
{
    public function EditRoom(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'rate' => 'required',
            'price' => 'required',

        ]);

        $room = Room::find($request->id_room);

        $room->update([
            'name' => $request->name,
            'address' => $request->address,
            'rate' => $request->rate,
            'price' => $request->price,
        ]);

        return to_route('room.index');
    }

    public function LoadRooms()
    {
        $rooms = Room::all();
        $user = auth('web')->user();
        return Inertia::render('Room/Rooms_list', ['rooms' => $rooms, 'user' => $user]);
    }


    public function LoadEditForm($room_id)
    {
        $roomDetail = Room::find($room_id); 
        $user = auth('web')->user();
        return Inertia::render('Room/EditRoom', ['room_detail' => $roomDetail, 'user' => $user],);
    }

    public function LoadCreateForm()
    {
        $user = auth('web')->user();
        return Inertia::render('Room/CreateRoom', ['user' => $user],);
    }

    public function DeleteRoom($room_id)
    {
        $room = Room::find($room_id);
        $room->delete();
        return to_route('room.index');
    }

    public function CreateRoom(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'rate' => 'required|numeric',
            'price' => 'required',
        ]);


        Room::create([
            'name' => $request->name,
            'address' => $request->address,
            'rate' => $request->rate,
            'price' => $request->price,
        ]);

        return to_route('room.index');
    }
}
