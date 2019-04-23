<?php

namespace App\Policies;

use App\User;
use App\Competition;
use Illuminate\Auth\Access\HandlesAuthorization;

class CompetitionPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the  competition.
     *
     * @param  \App\User  $user
     * @param  \App\Competition  $Competition
     * @return mixed
     */
    public function view(User $user, Competition $Competition)
    {
        //
    }

    /**
     * Determine whether the user can create  competitions.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the  competition.
     *
     * @param  \App\User  $user
     * @param  \App\Competition  $Competition
     * @return mixed
     */
    public function update(User $user, Competition $Competition)
    {
        //
    }

    /**
     * Determine whether the user can delete the  competition.
     *
     * @param  \App\User  $user
     * @param  \App\Competition  $Competition
     * @return mixed
     */
    public function delete(User $user, Competition $Competition)
    {
        //
    }

    /**
     * Determine whether the user can restore the  competition.
     *
     * @param  \App\User  $user
     * @param  \App\Competition  $Competition
     * @return mixed
     */
    public function restore(User $user, Competition $Competition)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the  competition.
     *
     * @param  \App\User  $user
     * @param  \App\Competition  $Competition
     * @return mixed
     */
    public function forceDelete(User $user, Competition $Competition)
    {
        //
    }
}
