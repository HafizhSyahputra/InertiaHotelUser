<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Promo extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'promo_name',
        'promo_code',
        'promo_price',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'table_promo'; // Nama tabel di database

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id'; // Primary key dari tabel room

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true; // Aktifkan timestamps untuk created_at dan updated_at

    

}
