<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dvd;
class DvdController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
    }

    public function index(){
      return Dvd::all();
    }

    public function show($id){
      return Dvd::find($id);
    }

}
