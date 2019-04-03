@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Competitions</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <ul>
                        @foreach ($competitions as $competition)
                            <a href="/competitions/{{$competition->id}}">
                                <li>{{$competition->name}}</li>
                            </a>
                        @endforeach
                        <br>
                        <a href="/competitions/create">
                            <button>create competition</button>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
