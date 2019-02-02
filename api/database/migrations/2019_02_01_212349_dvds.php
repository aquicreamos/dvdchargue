<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Dvds extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
      Schema::create('dvds', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('numId')->nullable();
          $table->string('name');
          $table->text('content')->nullable();
          $table->string('image')->nullable();
          $table->string('tags')->nullable();
          $table->string('case')->nullable();
          $table->string('score')->nullable();
          $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
