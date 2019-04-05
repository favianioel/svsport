@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Edit {{ $user->name }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <form method="POST" action="/users/{{$user->id}}">
                        @csrf
                        @method('PATCH')
                        <div><input name="name" placeholder="Name of user" type="text"></div>
                        <div><input name="role" placeholder="ROle of user" type="text"></div>
                        <br>
                        <button type="submit">Update</button>
                    </form>
                    <form method="POST" action="/users/{{$user->id}}">
                    @method('DELETE')
                    @csrf
                    <button type="submit">Delete</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
