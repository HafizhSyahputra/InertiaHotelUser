<?php

namespace App\Http\Controllers\RoomControllers;
use App\Http\Controllers\Controller;

use App\Models\DetailRoom;
use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailRoomController extends Controller
{
    public function EditDetailRoom(Request $request)
    {
        $request->validate([
            'id_room' => 'required',
            'images' => 'required',
            'description' => 'required',
            'capacity' => 'required',
            'facility' => 'required',
            'bed_type' => 'required',
            'status' => 'required',


        ]);

        $detail = DetailRoom::find($request->id_detail);

        $detail->update([
            'id_room' => $request->id_room,
            'images' => $request->images,
            'description' => $request->description,
            'capacity' => $request->capacity,
            'facility' => $request->facility,
            'bed_type' => $request->bed_type,
            'status' => $request->status,
        ]);

        return to_route('detail.index');
    }

    public function LoadDetailRooms()
    {
        $details = DetailRoom::with('room')->get();  
        $user = auth('web')->user();
        return Inertia::render('Detail/DetailRoom', ['detail_room' => $details, 'user' => $user]);
    }
    


    public function LoadEditDetail($detail_id)
    {
        $roomDetail = DetailRoom::find($detail_id); 
        $user = auth('web')->user();
        return Inertia::render('Detail/EditDetailRoom', ['detail_edit' => $roomDetail, 'user' => $user],);
    }

    public function LoadCreateDetailForm()
    {
        $rooms = Room::all();
        $user = auth('web')->user();
        return Inertia::render('Detail/CreateDetailRoom', [
            'rooms' => $rooms,
            'user' => $user
        ]);
    }

    public function DeleteDetail($detail_id)
    {
        $detail = DetailRoom::find($detail_id);
        $detail->delete();
        return to_route('detail.index');
    }

    public function CreateDetailRoom(Request $request)
    {
        $request->validate([
            'id_room' => 'required|exists:room,id_room',
            'images' => 'required',
            'description' => 'required',
            'capacity' => 'required|numeric',
            'facility' => 'required',
            'bed_type' => 'required|in:single,double,queen,king,twin',
            'status' => 'required|in:available,booked,maintenance',
        ]);

        DetailRoom::create([
            'id_room' => $request->id_room,
            'images' => $request->images,
            'description' => $request->description,
            'capacity' => $request->capacity,
            'facility' => $request->facility,
            'bed_type' => $request->bed_type,
            'status' => $request->status,
        ]);

        return redirect()->route('detail.index');
    }
}
