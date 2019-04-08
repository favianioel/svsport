@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Users</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <ul>
                        @foreach ($users as $user)
                            <a href="/users/{{$user->id}}">
                                <li>{{$user->name}}</li>
                            </a>
                        @endforeach
                        <br>
                        <a href="/users/create">
                            <button>create competition</button>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
