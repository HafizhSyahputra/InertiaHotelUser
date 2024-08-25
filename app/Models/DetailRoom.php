<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetailRoom extends Model
{
    protected $fillable = [
        'id_room',
        'images',
        'description',
        'capacity',
        'facility',
        'bed_type',
        'status',
    ];

    protected $table = 'detail_room';

    protected $primaryKey = 'id_detail';

    public $timestamps = true;

    protected $casts = [
        'images' => 'array',
        'facility' => 'array',
    ];

    public function room()
    {
        return $this->belongsTo(Room::class, 'id_room', 'id_room');
    }
}

