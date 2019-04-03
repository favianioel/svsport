@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Teams</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <ul>
                        @foreach ($teams as $team)
                            <a href="/teams/{{$team->id}}">
                                <li>{{$team->name}}</li>
                            </a>
                        @endforeach
                        <br>
                        <a href="/teams/create">
                            <button>create team</button>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
