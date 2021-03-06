<?php

namespace App\Http\Controllers;
use App\Recruiter;
use App\JobPost;
use Illuminate\Http\Request;

class RecruiterController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth:admin');
    }


    
    /**
     * Create a new controller instance.
     *
     * @return void
     */


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('welcome');
    }



      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getJobsList()
    {
        $posts = JobPost::all();
        return view ('Manage_jobs' , compact('posts'));
    }


    public function delete($id)
    {
        JobPost::destroy($id);
        return redirect ('/Jobs');

    }
}
