<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Project::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'author' => 'required|string|max:255',
            'link' => 'nullable|url',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048', // validate image
        ]);

        // handle file upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects', 'public'); 
            $validated['image'] = $path; 
        }

        $project = Project::create($validated);

        return response()->json($project, 201);
    }


    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return response()->json($project);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'author' => 'required|string|max:255',
            'link' => 'nullable|url',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048', // validate image
        ]);

        // handle file upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects', 'public'); 
            $validated['image'] = $path; 
        }

        $project = Project::create($validated);

        return response()->json($project, 201);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}