<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\ProjectController;

Route::middleware('api')->prefix('api')->group(function () {
    Route::apiResource('products', ProductController::class);

    // Get all projects
    Route::get('projects', [ProjectController::class, 'index']);

    // Get single project (Route Model Binding)
    Route::get('projects/{project}', [ProjectController::class, 'show']);
});