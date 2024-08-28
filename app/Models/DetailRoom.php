<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

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

    public function transactions()
    {
        return $this->hasMany(Transactions::class, 'detail_room_id', 'id_detail');
    }

    public function updateStatusBasedOnTransactions()
    {
        $hasActiveTransaction = $this->transactions()
            ->whereIn('status', ['active', 'Waiting for Payment'])
            ->exists();
    
        Log::info("Updating DetailRoom ID {$this->id_detail}. Active Transaction: " . ($hasActiveTransaction ? 'Yes' : 'No'));
    
        if ($hasActiveTransaction) {
            $this->status = 'booked';
        } else {
            $this->status = 'available';
        }
    
        $this->save();
    }
    
}
