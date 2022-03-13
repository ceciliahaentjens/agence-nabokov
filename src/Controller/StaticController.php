<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StaticController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        return $this->render('index.html.twig', [
            'controller_name' => 'StaticController',
        ]);
    }

    /**
     * @Route("/mentions-legales", name="mentions")
     */
    public function showMentionsPage(): Response
    {
        return $this->render('static/mentions.html.twig', [
            'controller_name' => 'StaticController',
        ]);
    }

    /**
     * @Route("/envoi-de-manuscrits", name="manuscripts")
     */
    public function showManuscriptsPage(): Response
    {
        return $this->render('static/manuscripts.html.twig', [
            'controller_name' => 'StaticController',
        ]);
    }
}
