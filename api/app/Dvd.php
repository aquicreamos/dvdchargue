<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dvd extends Model {

  protected $fillable = [
    'id',	'numId',	'name',	'content',	'image',	'tags',	'case',	'score'
  ];

  public static $rules = [
    'id' => 'required|numeric',
    'numId' => 'required|numeric',
    'name' => 'required|string',
    'content' => 'required|string',
    'image' => 'required|string',
    'tags' => 'required|string',
    'case' => 'required|string',
    'score' => 'required|string',
  ];

}
