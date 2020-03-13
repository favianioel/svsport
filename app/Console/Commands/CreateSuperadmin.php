<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;

class CreateSuperadmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:super-admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'creates a user with ROLE_SUPERADMIN';

    /**
     * User model.
     *
     * @var object
     */
    private $user;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $superAdmin = new User;
        $user = [
            'name'  => 'Super Admin',
            'email' => 'superadmin@admin.dev',
            'password' => \Illuminate\Support\Facades\Hash::make('superadmin'),
            'roles'    => ['ROLE_SUPERADMIN']
        ];
        $superAdmin::create($user);

        $admin = new User;
        $user = [
            'name'  => 'Admin',
            'email' => 'admin@admin.dev',
            'password' => \Illuminate\Support\Facades\Hash::make('admin'),
            'roles'    => ['ROLE_ADMIN']
        ];
        $admin::create($user);
    }
}
