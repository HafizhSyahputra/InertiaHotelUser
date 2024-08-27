<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    use HasFactory;

    // Nama tabel yang digunakan oleh model ini
    protected $table = 'transactions';

    // Kolom yang dapat diisi massal
    protected $fillable = [
        'order_id',
        'check_in_date',
        'check_out_date',
        'user_id',
        'room_id',
        'detail_room_id',
        'total_people',
        'total_nights',
        'tax',
        'total_price',
        'status',
        'payment_type',
    ];

    // Timestamps tidak digunakan di model ini
    public $timestamps = true;

    // Jika menggunakan soft deletes, aktifkan baris ini
    // use SoftDeletes;

    // Relasi ke tabel users
    public function user()
    {
        return $this->belongsTo(User::class, 'id');
    }

    // Relasi ke tabel room
    public function room()
    {
        return $this->belongsTo(Room::class, 'room_id', 'id_room');
    }

    // Relasi ke tabel detail_room
    public function detailRoom()
    {
        return $this->belongsTo(DetailRoom::class, 'detail_room_id', 'id_detail');
    }
}
