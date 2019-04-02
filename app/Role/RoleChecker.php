<?php

namespace App\Role;

use App\User;

/**
 * Class RoleChecker
 * @package App\Role
 */
class RoleChecker
{
    /**
     * @param User $user
     * @param string $role
     * @return bool
     */
    public function check(User $user, string $role)
    {
        // Admin has everything
        if ($user->hasRole(UserRole::ROLE_SUPERADMIN)) {
            return true;
        } elseif ($user->hasRole(UserRole::ROLE_ADMIN)) {
            $adminRoles = UserRole::getAllowedRoles(UserRole::ROLE_ADMIN);

            if (in_array($role, $adminRoles)) {
                return true;
            }
        }

        return $user->hasRole($role);
    }
}
