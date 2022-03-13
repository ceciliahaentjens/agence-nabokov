<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        return $this->render('index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }

    /**
     * @Route("/mentions-legales", name="mentions")
     */
    public function showMentions(): Response
    {
        return $this->render('mentions.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }
}
