<?php
namespace App\Controller;

use Automattic\WooCommerce\Client;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class ApiController
{
    public function index($method, $id = null, Request $request, Client $wooCommerce)
    {
        $path = $method . (!empty($id) ? "/" . $id : "");

        try {
            $parameters = [];
            foreach ($request->query->keys() as $key) {
                $parameters[$key] = $request->query->get($key);
            }

            $json = $wooCommerce->get($path, $parameters);

            $response = new JsonResponse($json);
            $response->headers->set('Access-Control-Allow-Origin', $_ENV['API_ACCESS_CONTROL_ALLOW_ORIGIN']);
            $response->headers->set('Access-Control-Allow-Headers', $_ENV['API_ACCESS_CONTROL_ALLOW_HEADERS']);

            return $response;
        } catch(\Exception $e) {
            $json = $e->getMessage();
            $code = $e->getResponse()->getCode();
            return new Response($json, $code);
        }
    }
}
