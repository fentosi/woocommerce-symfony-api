<?php
namespace App\Controller;

use Automattic\WooCommerce\Client;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;


class ApiController
{
    public function index($method, $id = null, Client $wooCommerce)
    {
        $path = $method . (!empty($id) ? "/" . $id : "");

        try {
            $json = $wooCommerce->get($path);

            $response = new JsonResponse($json);
            $response->headers->set('Access-Control-Allow-Origin', $_ENV['API_ACCESS_CONTROL_ALLOW_ORIGIN']);

            return $response;
        } catch(\Exception $e) {
            $json = $e->getMessage();
            $code = $e->getResponse()->getCode();
            return new Response($json, $code);
        }
    }
}
