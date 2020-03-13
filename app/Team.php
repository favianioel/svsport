<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Competition;

class Team extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function competitions()
    {
        return $this->belongsToMany(Competition::class);
    }
}
