<?php

namespace App\Role;

/***
 * Class UserRole
 * @package App\Role
 */
class UserRole
{
    //ROLE_USER is not needed in our example but I'll keep it for example;
    const ROLE_SUPERADMIN = 'ROLE_SUPERADMIN';
    const ROLE_ADMIN = 'ROLE_ADMIN';
    const ROLE_USER = 'ROLE_USER';

    /**
     * @var array
     */
    protected static $roleHierarchy = [
        self::ROLE_SUPERADMIN => ['*'],
        self::ROLE_ADMIN => [
            self::ROLE_USER,
        ],
    ];

    /**
     * @param string $role
     * @return array
     */
    public static function getAllowedRoles(string $role)
    {
        if (isset(self::$roleHierarchy[$role])) {
            return self::$roleHierarchy[$role];
        }

        return [];
    }

    /***
     * @return array
     */
    public static function getRoleList()
    {
        return [
            static::ROLE_SUPERADMIN =>'ROLE_SUPERADMIN',
            static::ROLE_ADMIN => 'ROLE_ADMIN',
            static::ROLE_USER => 'ROLE_USER',
        ];
    }
}
