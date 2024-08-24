<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetailRoom extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_room',
        'images',
        'description',
        'capacity',
        'facility',
        'bed_type',
        'status',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'detail_room'; // Nama tabel di database

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_detail'; // Primary key dari tabel detail_room

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true; // Aktifkan timestamps untuk created_at dan updated_at

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'images' => 'array', // Konversi kolom images ke array
        'facility' => 'array', // Konversi kolom facility ke array
    ];

    /**
     * Define the relationship to the Room model.
     * 
     * Each detail room belongs to a room.
     */
    public function room()
    {
        return $this->belongsTo(Room::class, 'id_room', 'id_room');
    }
}
