@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Create a new User</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <form method="POST" action="/users">
                        @csrf
                        <div><input name="name" placeholder="Name of user" type="text"></div>
                        <div><input name="role" placeholder="Role of user" type="text"></div>
                        <br>
                        <button type="submit">create</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
