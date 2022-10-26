<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MoviesController extends AbstractController
{
       
    
    #[Route("/movies", name:"movies")]
    public function index(): Response
    {
        return $this->render('index.html.twig', [
            'title' => 'Avengers: endgame',
        ]);
    }
    
    #[Route("/movie/{name}", name:"movies_show", defaults: ['name' => null], methods:["GET","HEAD"])]
    public function show($name): Response
    {
        return $this->json([
            'message' => "Show the {$name} movie!",
            'path' => 'src/Controller/MoviesController.php',
        ]);
    }
}
